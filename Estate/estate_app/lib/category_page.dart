  import 'package:flutter/material.dart';
import 'main.dart'; // Import your main.dart for HomePage navigation
//import 'service_category.dart'; // Import your ServicePage for navigation
import 'customer_dashboard.dart'; // Import your CustomerDashboard for navigation


class CategoryPage extends StatefulWidget {
  @override
  _CategoryPageState createState() => _CategoryPageState();
}

class _CategoryPageState extends State<CategoryPage> {
  String selectedCategory = 'All';

  final Map<String, List<Property>> categorizedProperties = {
    'Villa': [
      Property(
        title: 'Luxury Beach Villa',
        rooms: 5,
        area: 4000,
        floors: 2,
        imageUrl:
            'https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=',
      ),
      Property(
        title: 'Mountain View Villa',
        rooms: 4,
        area: 3500,
        floors: 1,
        imageUrl:
            'https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=',
      ),
    ],
    'Lands': [
      Property(
        title: 'Agricultural Land',
        rooms: 0,
        area: 5000,
        floors: 0,
        imageUrl:
            'https://mistertlk.s3.ap-southeast-1.amazonaws.com/property/lands/1317_1_1731059375.jpg',
      ),
      Property(
        title: 'Urban Plot',
        rooms: 0,
        area: 2000,
        floors: 0,
        imageUrl:
            'https://www.lankapropertyweb.com//pics/5684643/thumb_424_5684643_1720701293_3036.jpeg?v=8',
      ),
    ],
    'Homes': [
      Property(
        title: 'Modern Family Home',
        rooms: 3,
        area: 2000,
        floors: 2,
        imageUrl:
            'https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=',
      ),
      Property(
        title: 'Classic Country Home',
        rooms: 4,
        area: 3000,
        floors: 1,
        imageUrl:
            'https://www.shutterstock.com/image-photo/big-custom-made-luxury-house-260nw-382519261.jpg',
      ),
    ],
    'Apartment': [
      Property(
        title: 'City Center Apartment',
        rooms: 2,
        area: 1500,
        floors: 1,
        imageUrl:
            'https://kelsey.lk/wp-content/uploads/2023/05/MyCollages-4.jpg',
      ),
      Property(
        title: 'Luxury High-Rise',
        rooms: 3,
        area: 2500,
        floors: 2,
        imageUrl:
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/433537564.jpg?k=4ebf8e35039d4aa3f2fd14cc0481aa638e51505157b0c82c9b5f6d8847fbd2f3&o=&hp=1',
      ),
    ],
  };

  @override
  Widget build(BuildContext context) {
    final filteredProperties = selectedCategory == 'All'
        ? categorizedProperties
        : {selectedCategory: categorizedProperties[selectedCategory]!};

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Text(
          'Properties',
          style: TextStyle(color: Colors.black),
        ),
        centerTitle: true,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 1, // Indicates this page (Categories)
        onTap: (index) {
          if (index == 0) {
            // Navigate to Home (Main page)
            Navigator.pushAndRemoveUntil(
              context,
              MaterialPageRoute(builder: (context) => MainScreen()),
              (route) => false,
            );
          } else if (index == 1) {
            // Stay on Categories Page
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
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Search bar
            Container(
              padding: EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: Colors.grey.shade200,
                borderRadius: BorderRadius.circular(30),
              ),
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Search...',
                  border: InputBorder.none,
                  prefixIcon: Icon(Icons.search),
                ),
              ),
            ),
            SizedBox(height: 20),

            // Filter buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildFilterButton('All'),
                _buildFilterButton('Villa'),
                _buildFilterButton('Homes'),
                _buildFilterButton('Lands'),
                _buildFilterButton('Apartment'),
              ],
            ),
            SizedBox(height: 20),

            // Property List
            Expanded(
              child: ListView(
                children: [
                  ...filteredProperties.entries.map((entry) {
                    final category = entry.key;
                    final properties = entry.value;

                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          category,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 12),
                        ...properties.map((property) {
                          return Card(
                            margin: EdgeInsets.only(bottom: 16),
                            elevation: 4,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Row(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.only(
                                    topLeft: Radius.circular(12),
                                    bottomLeft: Radius.circular(12),
                                  ),
                                  child: Image.network(
                                    property.imageUrl,
                                    width: 120,
                                    height: 120,
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                SizedBox(width: 12),
                                Expanded(
                                  child: Padding(
                                    padding: const EdgeInsets.all(8.0),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          property.title,
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        SizedBox(height: 4),
                                        Text(
                                          property.rooms > 0
                                              ? '${property.rooms} rooms - ${property.area} sqft - ${property.floors} floors'
                                              : '${property.area} sqft',
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Colors.grey.shade600,
                                          ),
                                        ),
                                        SizedBox(height: 8),
                                        Container(
                                          padding: EdgeInsets.symmetric(
                                            horizontal: 12,
                                            vertical: 4,
                                          ),
                                          decoration: BoxDecoration(
                                            color: Colors.green,
                                            borderRadius:
                                                BorderRadius.circular(20),
                                          ),
                                          child: Text(
                                            property.rooms > 0
                                                ? 'FOR SALE'
                                                : 'FOR SALE',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 12,
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          );
                        }).toList(),
                        SizedBox(height: 20),
                      ],
                    );
                  }).toList(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

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
}

// Property model
class Property {
  final String title;
  final int rooms;
  final double area;
  final int floors;
  final String imageUrl;

  Property({
    required this.title,
    required this.rooms,
    required this.area,
    required this.floors,
    required this.imageUrl,
  });
} 