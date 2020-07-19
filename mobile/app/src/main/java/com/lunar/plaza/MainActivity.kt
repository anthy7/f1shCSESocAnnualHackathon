package com.lunar.plaza

import android.os.Bundle
import androidx.core.view.GravityCompat
import androidx.appcompat.app.ActionBarDrawerToggle
import android.view.MenuItem
import androidx.drawerlayout.widget.DrawerLayout
import com.google.android.material.navigation.NavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import android.view.Menu
import android.view.View
import kotlinx.android.synthetic.main.app_bar_main.*

class MainActivity : AppCompatActivity(), NavigationView.OnNavigationItemSelectedListener {

    var names : Array<String> = arrayOf("Order #272", "Order #268", "Order #267")
    var items : Array<Array<String>> = arrayOf(arrayOf("Nancy the Shark", "Bunny", "Owl"), arrayOf("Brown Teddy Bear", "Giraffe", ""), arrayOf("Koala Bear", "Graduation Bear", "Giraffe"))
    var activeOrders : Int = 3
    var totalOrders : Int = 182

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        val drawerLayout: DrawerLayout = findViewById(R.id.drawer_layout)
        val navView: NavigationView = findViewById(R.id.nav_view)
        val toggle = ActionBarDrawerToggle(
                this, drawerLayout, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close)
        drawerLayout.addDrawerListener(toggle)
        toggle.syncState()

        navView.setNavigationItemSelectedListener(this)

        displayFragment(-1)

        val fab: View = add_fab
        fab.setOnClickListener {
            displayFragment(1)
        }
    }
    override fun onBackPressed() {
        val drawerLayout: DrawerLayout = findViewById(R.id.drawer_layout)
        if (drawerLayout.isDrawerOpen(GravityCompat.START)) {
            drawerLayout.closeDrawer(GravityCompat.START)
        } else {
            super.onBackPressed()
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.main, menu)
        return true
    }
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            R.id.action_refresh -> {
                names = arrayOf("Order #273", "Order #272", "Order #268", "Order #267")
                items = arrayOf(arrayOf("Shark Plushie", "Owl", ""), arrayOf("Nancy the Shark", "Bunny", "Owl"), arrayOf("Brown Teddy Bear", "Giraffe", ""), arrayOf("Koala Bear", "Graduation Bear", "Giraffe"))
                activeOrders = 4
                totalOrders = 183
                displayFragment(R.id.nav_orders)
                return true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        displayFragment(item.itemId)
        val drawerLayout: DrawerLayout = findViewById(R.id.drawer_layout)
        drawerLayout.closeDrawer(GravityCompat.START)
        return true
    }

    fun displayFragment(id: Int) {
        if(id == R.id.nav_inventory) {
            add_fab.setVisibility(View.VISIBLE)
        }
        else {
            add_fab.setVisibility(View.GONE)
        }
        val fragment = when (id) {
            R.id.nav_orders -> {
                OrdersFragment()
            }
            R.id.nav_inventory -> {
                InventoryFragment()
            }
            1 -> {
                editItemFragment()
            }
            else -> {
                OrdersFragment()
            }
        }
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.constraintLayout, fragment)
            .commit()
    }
}
