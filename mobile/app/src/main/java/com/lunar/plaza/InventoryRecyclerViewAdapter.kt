package com.lunar.plaza

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item.view.*
import kotlinx.android.synthetic.main.nav_header_main.view.*

class InventoryRecyclerViewAdapter(private val dataset: Array<String>, private val imageset: Array<Int>, private val priceset: Array<String>) :
    RecyclerView.Adapter<InventoryRecyclerViewAdapter.ViewHolder>() {

    // Provide a reference to the views for each data item
    // Complex data items may need more than one view per item, and
    // you provide access to all the views for a data item in a view holder.
    // Each data item is just a string in this case that is shown in a TextView.
    class ViewHolder(val view: View) : RecyclerView.ViewHolder(view) {
        var titleView : TextView = view.item_name
        var imageView : ImageView = view.imageView2
        var priceView : TextView = view.price
    }


    // Create new views (invoked by the layout manager)
    override fun onCreateViewHolder(parent: ViewGroup,
                                    viewType: Int): ViewHolder {
        // create a new view
        val view: View = LayoutInflater.from(parent.context)
            .inflate(R.layout.item, parent, false) as View
        // set the view's size, margins, paddings and layout parameters
        // TODO
        return ViewHolder(view)
    }

    // Replace the contents of a view (invoked by the layout manager)
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
        holder.titleView.text = dataset[position]
        holder.imageView.setImageResource(imageset[position])
        holder.priceView.text = priceset[position]
    }

    // Return the size of your dataset (invoked by the layout manager)
    override fun getItemCount() = dataset.size
}
