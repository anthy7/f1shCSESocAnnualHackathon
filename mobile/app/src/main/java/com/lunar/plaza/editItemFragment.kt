package com.lunar.plaza

import android.app.Activity.RESULT_OK
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.os.Bundle
import android.provider.MediaStore
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.SeekBar
import androidx.fragment.app.Fragment
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.Text
import com.google.mlkit.vision.text.TextRecognition
import kotlinx.android.synthetic.main.edititem_fragment.*
import kotlinx.android.synthetic.main.nav_header_main.*

class editItemFragment : Fragment () {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater?.inflate(R.layout.edititem_fragment, null)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val seek: SeekBar = seekBar
        seek.setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(seekBar: SeekBar, i: Int, b: Boolean) {
                // Display the current progress of SeekBar
                newproduct_cost.text = "$$i.00"
            }

            override fun onStartTrackingTouch(seekBar: SeekBar) {
            }

            override fun onStopTrackingTouch(seekBar: SeekBar) {
            }
        }
        )

        val scanButton: Button = scan_button

        scanButton.setOnClickListener{
            dispatchTakePictureIntent()
        }
    }

    val REQUEST_IMAGE_CAPTURE = 1

    private fun dispatchTakePictureIntent() {
        Intent(MediaStore.ACTION_IMAGE_CAPTURE).also { takePictureIntent ->
            getActivity()?.getPackageManager()?.let {
                takePictureIntent.resolveActivity(it)?.also {
                    startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE)
                }
            }
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            val imageBitmap = data?.extras?.get("data") as Bitmap
            productImage.setImageBitmap(imageBitmap)
            scanImage(imageBitmap)
        }
    }

    fun scanImage(bitmap: Bitmap) {
        val image = InputImage.fromBitmap(bitmap, 0)
        val recognizer = TextRecognition.getClient()
        val result = recognizer.process(image)
            .addOnSuccessListener { visionText ->
                displayText(visionText)
            }
            .addOnFailureListener { e ->
                // Task failed with an exception
                // ...
            }
    }

    fun displayText(result: Text) {
        val resultText = result.text
        for (block in result.textBlocks) {
            val blockText = block.text
            val blockCornerPoints = block.cornerPoints
            val blockFrame = block.boundingBox
            for (line in block.lines) {
                val lineText = line.text
                val lineCornerPoints = line.cornerPoints
                val lineFrame = line.boundingBox
                for (element in line.elements) {
                    val elementText = element.text
                    val elementCornerPoints = element.cornerPoints
                    val elementFrame = element.boundingBox
                }
            }
        }
        newproduct_name.setText(resultText)
    }
}