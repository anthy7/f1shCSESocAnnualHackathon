package com.lunar.plaza

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.orders_fragment.*

class OrdersFragment : Fragment() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: RecyclerView.Adapter<*>
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater?.inflate(R.layout.orders_fragment, null)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        activity?.setTitle("Orders")

        viewManager = LinearLayoutManager(this.context)
        viewAdapter = OrdersRecyclerViewAdapter((this.context as MainActivity).names, (this.context as MainActivity).items)
        activeOrdersView.text = (this.context as MainActivity).activeOrders.toString()
        totalOrdersView.text = (this.context as MainActivity).totalOrders.toString()

        recyclerView = ordersList.apply {
            // use a linear layout manager
            layoutManager = viewManager

            // specify an viewAdapter (see also next example)
            adapter = viewAdapter

        }

    }
}