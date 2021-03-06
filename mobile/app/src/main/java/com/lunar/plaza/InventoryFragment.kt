package com.lunar.plaza

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.orders_fragment.*

class InventoryFragment : Fragment () {

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: RecyclerView.Adapter<*>
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater?.inflate(R.layout.inventory_fragment, null)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        activity?.setTitle("Inventory")

        viewManager = LinearLayoutManager(this.context)
        viewAdapter = InventoryRecyclerViewAdapter(arrayOf("Brown Teddy Bear", "Bunny", "Giraffe", "Graduation Bear", "Koala Bear", "Owl", "Shark Plushie"), arrayOf(R.mipmap.brown_teddy, R.mipmap.bunny, R.mipmap.giraffe, R.mipmap.grad_teddy, R.mipmap.koala, R.mipmap.owl, R.mipmap.shark), arrayOf("\$15.00", "\$17.50", "\$12.50", "\$18.00", "\$19.00", "\$16.00", "$32.50"))

        recyclerView = ordersList.apply {
            // use a linear layout manager
            layoutManager = viewManager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

        }
    }
}
