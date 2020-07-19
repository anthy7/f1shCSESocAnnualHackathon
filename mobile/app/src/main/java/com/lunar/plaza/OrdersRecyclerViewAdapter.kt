package com.lunar.plaza

import android.content.res.ColorStateList
import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.order_entry.view.*

class OrdersRecyclerViewAdapter(private val dataset: Array<String>, private val itemset: Array<Array<String>>) :
    RecyclerView.Adapter<OrdersRecyclerViewAdapter.ViewHolder>() {

    // Provide a reference to the views for each data item
    // Complex data items may need more than one view per item, and
    // you provide access to all the views for a data item in a view holder.
    // Each data item is just a string in this case that is shown in a TextView.
    class ViewHolder(val view: View) : RecyclerView.ViewHolder(view) {
        var titleView : TextView = view.item_name
        var checkBox: CheckBox = view.checkBox
        var checkBox2: CheckBox = view.checkBox2
        var checkBox3: CheckBox = view.checkBox3
    }


    // Create new views (invoked by the layout manager)
    override fun onCreateViewHolder(parent: ViewGroup,
                                    viewType: Int): ViewHolder {
        // create a new view
        val view: View = LayoutInflater.from(parent.context)
            .inflate(R.layout.order_entry, parent, false) as View
        // set the view's size, margins, paddings and layout parameters
        view.readyButton.setOnClickListener(object : View.OnClickListener {
            override fun onClick(v: View?) {
                if (view.readyButton.text == "MARK READY") {
                    view.readyButton.text = "UNDO READY"
                    view.readyButton.backgroundTintList = ColorStateList.valueOf(Color.parseColor("#808080"));
                } else {
                    view.readyButton.text = "MARK READY"
                    view.readyButton.backgroundTintList = ColorStateList.valueOf(Color.parseColor("#F68957"));
                }
            }
        })
        return ViewHolder(view)
    }

    // Replace the contents of a view (invoked by the layout manager)
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
        holder.titleView.text = dataset[position]
        holder.checkBox.text = itemset[position][0]
        holder.checkBox2.text = itemset[position][1]
        if (itemset[position][2].equals("")) {
            holder.checkBox3.visibility = View.GONE
        } else {
            holder.checkBox3.text = itemset[position][2]
        }
    }

    // Return the size of your dataset (invoked by the layout manager)
    override fun getItemCount() = dataset.size
}
