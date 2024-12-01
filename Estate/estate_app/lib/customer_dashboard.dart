import 'package:flutter/material.dart';
import 'category_page.dart'; // Import your CategoryPage
import 'service_category.dart'; // Import your ServicePage

class CustomerDashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Full-Page Background Image
          Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: NetworkImage(
                  'https://static.vecteezy.com/system/resources/thumbnails/023/331/708/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg',
                ),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Column(
            children: [
              // Custom AppBar
              PreferredSize(
                preferredSize: Size.fromHeight(80),
                child: AppBar(
                  backgroundColor: Colors.black.withOpacity(0.6),
                  elevation: 0,
                  title: Row(
                    children: [
                      Icon(
                        Icons.home,
                        size: 40,
                        color: Colors.white,
                      ),
                      SizedBox(width: 10),
                      Text(
                        'EstatePlus',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Expanded(
                child: Center(
                  child: Container(
                    color: Colors.black.withOpacity(0.4), // Semi-transparent overlay
                    padding: EdgeInsets.all(20),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          'Welcome to Customer Dashboard',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 20),
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => CategoryPage(),
                              ),
                            );
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                          ),
                          child: Text('View Properties'),
                        ),
                        SizedBox(height: 10),
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => ServicePage(),
                              ),
                            );
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                          ),
                          child: Text('View Services'),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              // Footer
              Container(
                color: Colors.black.withOpacity(0.6),
                padding: EdgeInsets.all(10),
                child: Column(
                  children: [
                    Text(
                      'Contact Us',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 5),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.phone, color: Colors.white),
                        SizedBox(width: 5),
                        Text(
                          '+1-800-123-4567',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 5),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.email, color: Colors.white),
                        SizedBox(width: 5),
                        Text(
                          'support@estateplus.com',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
