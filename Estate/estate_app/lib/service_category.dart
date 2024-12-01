import 'package:flutter/material.dart';
import 'main.dart'; // For MainScreen navigation
import 'customer_dashboard.dart'; // Import CustomerDashboard for navigation

class ServicePage extends StatefulWidget {
  @override
  _ServicePageState createState() => _ServicePageState();
}

class _ServicePageState extends State<ServicePage> {
  String selectedCategory = 'All';

  final Map<String, List<Service>> categorizedServices = {
    'Plumbing': [
      Service(
        title: 'Plumbing Service',
        provider: 'John Doe',
        price: 3000,
        contact: '0911234567',
      ),
      Service(
        title: 'Plumbing Service',
        provider: 'Sam',
        price: 3500,
        contact: '0911234567',
      ),
    ],
    'Construction': [
      Service(
        title: 'Construction Service',
        provider: 'Build Pro',
        price: 50000,
        contact: '0911234567',
      ),
      Service(
        title: 'Construction Service',
        provider: 'BuildTech',
        price: 60000,
        contact: '0911234567',
      ),
    ],
    'Repair': [
      Service(
        title: 'Repair Service',
        provider: 'FixIt Ltd.',
        price: 5000,
        contact: '0911234567',
      ),
    ],
    'Electrical': [
      Service(
        title: 'Electrical Service',
        provider: 'PowerFix',
        price: 7000,
        contact: '0911234567',
      ),
    ],
  };

  @override
  Widget build(BuildContext context) {
    // Filter services based on the selected category
    final filteredServices = selectedCategory == 'All'
        ? categorizedServices.values.expand((services) => services).toList()
        : categorizedServices[selectedCategory] ?? [];

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Text(
          'Services',
          style: TextStyle(color: Colors.black),
        ),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Filter buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildFilterButton('All'),
                _buildFilterButton('Plumbing'),
                _buildFilterButton('Construction'),
                _buildFilterButton('Repair'),
                _buildFilterButton('Electrical'),
              ],
            ),
            SizedBox(height: 20),
            // Service List
            Expanded(
              child: ListView(
                children: [
                  Wrap(
                    spacing: 16,
                    runSpacing: 16,
                    children: filteredServices.map((service) {
                      return _buildServiceCard(service);
                    }).toList(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 1, // Indicates the current page is "Services"
        onTap: (index) {
          if (index == 0) {
            // Navigate to HomePage (MainScreen)
            Navigator.pushAndRemoveUntil(
              context,
              MaterialPageRoute(builder: (context) => MainScreen()),
              (route) => false,
            );
          } else if (index == 1) {
            // Navigate to Customer Dashboard (Categories page)
            Navigator.pushAndRemoveUntil(
              context,
              MaterialPageRoute(builder: (context) => CustomerDashboard()),
              (route) => false,
            );
          }
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            label: 'Categories',
          ),
        ],
      ),
    );
  }

  // Helper method to build filter buttons
  Widget _buildFilterButton(String category) {
    final isSelected = selectedCategory == category;
    return ElevatedButton(
      onPressed: () {
        setState(() {
          selectedCategory = category;
        });
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: isSelected ? Colors.green : Colors.grey.shade300,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        minimumSize: Size(50, 32),
      ),
      child: Text(
        category,
        style: TextStyle(
          color: isSelected ? Colors.white : Colors.black,
          fontSize: 12,
        ),
      ),
    );
  }

  // Helper method to build service cards
  Widget _buildServiceCard(Service service) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Container(
        width: 200,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              service.title,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 16,
              ),
            ),
            SizedBox(height: 8),
            Text('Provider: ${service.provider}'),
            Text('Price: Rs. ${service.price}'),
            Text('Contact: ${service.contact}'),
          ],
        ),
      ),
    );
  }
}

// Service model
class Service {
  final String title;
  final String provider;
  final int price;
  final String contact;

  Service({
    required this.title,
    required this.provider,
    required this.price,
    required this.contact,
  });
}
