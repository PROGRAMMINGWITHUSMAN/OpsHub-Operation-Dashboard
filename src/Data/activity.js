const activity = [
  {
    id: 1,
    about: "cart",
    title: "Ayesha Khan placed an order",
    time: "2026-10-04T08:30:00Z",
    relativeTime: "12m ago",
    subtitle: "Order #1024",
    user: "Ayesha Khan"
  },
  {
    id: 2,
    about: "people",
    title: "New User Registered",
    time: "2026-10-04T08:12:00Z",
    relativeTime: "30m ago",
    subtitle: "Hamza Ali",
    user: "Hamza Ali Mazaari"
  },
  {
    id: 3,
    about: "settings",
    title: "System Settings Changed",
    time: "2026-10-04T08:00:00Z",
    relativeTime: "42m ago",
    subtitle: "Updated Payment Gateway API Keys",
    user: "System Admin"
  },
  {
    id: 4,
    about: "cart",
    title: "Sara Ahmed completed payment",
    time: "2026-10-04T07:55:00Z",
    relativeTime: "47m ago",
    subtitle: "Payment #5821 ($129.99)",
    user: "Sara Ahmed"
  },
  {
    id: 5,
    about: "notification",
    title: "System Notification Sent",
    time: "2026-10-04T07:45:00Z",
    relativeTime: "57m ago",
    subtitle: "Promotional Email Blast to Active Users",
    user: "Notification Bot"
  },
  {
    id: 6,
    about: "cart",
    title: "Usman Raza cancelled an order",
    time: "2026-10-04T07:40:00Z",
    relativeTime: "1h ago",
    subtitle: "Order #1021",
    user: "Usman Raza"
  },
  {
    id: 7,
    about: "security",
    title: "Password Reset Requested",
    time: "2026-10-04T07:25:00Z",
    relativeTime: "1h ago",
    subtitle: "Account: tariq@example.com",
    user: "Tariq Mahmood"
  },
  {
    id: 8,
    about: "cart",
    title: "Mariam Siddiqui requested a refund",
    time: "2026-10-04T07:18:00Z",
    relativeTime: "1h ago",
    subtitle: "Order #1018",
    user: "Mariam Siddiqui"
  },
  {
    id: 9,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-04T06:52:00Z",
    relativeTime: "1h ago",
    subtitle: "Bilal Ahmed",
    user: "Bilal Ahmed"
  },
  {
    id: 10,
    about: "analytics",
    title: "Monthly Revenue Report Generated",
    time: "2026-10-04T06:40:00Z",
    relativeTime: "2h ago",
    subtitle: "September 2026 Performance",
    user: "Analytics Engine"
  },
  {
    id: 11,
    about: "product",
    title: "Hassan Malik purchased a product",
    time: "2026-10-04T06:30:00Z",
    relativeTime: "2h ago",
    subtitle: "Nike Air Max",
    user: "Hassan Malik"
  },
  {
    id: 12,
    about: "review",
    title: "New Product Review Submitted",
    time: "2026-10-04T06:15:00Z",
    relativeTime: "2h ago",
    subtitle: "5 Stars by Fatima N.",
    user: "Fatima N."
  },
  {
    id: 13,
    about: "cart",
    title: "Fatima Noor completed payment",
    time: "2026-10-04T06:05:00Z",
    relativeTime: "2h ago",
    subtitle: "Payment #5817",
    user: "Fatima Noor"
  },
  {
    id: 14,
    about: "cart",
    title: "Zain Hassan placed an order",
    time: "2026-10-04T05:44:00Z",
    relativeTime: "3h ago",
    subtitle: "Order #1016",
    user: "Zain Hassan"
  },
  {
    id: 15,
    about: "settings",
    title: "Store Policy Updated",
    time: "2026-10-04T05:30:00Z",
    relativeTime: "3h ago",
    subtitle: "Return & Refund Policy Terms",
    user: "Policy Manager"
  },
  {
    id: 16,
    about: "cart",
    title: "Noor Fatima requested a refund",
    time: "2026-10-04T05:20:00Z",
    relativeTime: "3h ago",
    subtitle: "Order #1012",
    user: "Noor Fatima"
  },
  {
    id: 17,
    about: "wallet",
    title: "Store Credit Added",
    time: "2026-10-04T05:05:00Z",
    relativeTime: "3h ago",
    subtitle: "$50 Credit to Account #402",
    user: "Account #402"
  },
  {
    id: 18,
    about: "people",
    title: "New User Registered",
    time: "2026-10-04T04:58:00Z",
    relativeTime: "3h ago",
    subtitle: "Omar Farooq",
    user: "Omar Farooq"
  },
  {
    id: 19,
    about: "cart",
    title: "Hira Shah completed payment",
    time: "2026-10-04T04:35:00Z",
    relativeTime: "4h ago",
    subtitle: "Payment #5810",
    user: "Hira Shah"
  },
  {
    id: 20,
    about: "security",
    title: "2FA Enabled",
    time: "2026-10-04T04:20:00Z",
    relativeTime: "4h ago",
    subtitle: "Admin Account Secured",
    user: "Security Guard"
  },
  {
    id: 21,
    about: "cart",
    title: "Danish Iqbal cancelled an order",
    time: "2026-10-04T04:10:00Z",
    relativeTime: "4h ago",
    subtitle: "Order #1008",
    user: "Danish Iqbal"
  },
  {
    id: 22,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-04T03:48:00Z",
    relativeTime: "5h ago",
    subtitle: "Laiba Tariq",
    user: "Laiba Tariq"
  },
  {
    id: 23,
    about: "product",
    title: "Ahmed Hassan purchased a product",
    time: "2026-10-04T03:25:00Z",
    relativeTime: "5h ago",
    subtitle: "Apple AirPods Pro",
    user: "Ahmed Hassan"
  },
  {
    id: 24,
    about: "notification",
    title: "Push Notification Alert",
    time: "2026-10-04T03:10:00Z",
    relativeTime: "5h ago",
    subtitle: "Flash Sale Alert Sent",
    user: "Marketing Bot"
  },
  {
    id: 25,
    about: "cart",
    title: "Payment Failed",
    time: "2026-10-04T02:58:00Z",
    relativeTime: "5h ago",
    subtitle: "Sana Ahmed (Payment #5804)",
    user: "Sana Ahmed"
  },
  {
    id: 26,
    about: "cart",
    title: "Ali Raza placed an order",
    time: "2026-10-04T02:35:00Z",
    relativeTime: "6h ago",
    subtitle: "Order #1003",
    user: "Ali Raza"
  },
  {
    id: 27,
    about: "settings",
    title: "Email Template Updated",
    time: "2026-10-04T02:20:00Z",
    relativeTime: "6h ago",
    subtitle: "Order Confirmation Layout",
    user: "Template Admin"
  },
  {
    id: 28,
    about: "cart",
    title: "Iqra Malik requested a refund",
    time: "2026-10-04T02:12:00Z",
    relativeTime: "6h ago",
    subtitle: "Order #0998",
    user: "Iqra Malik"
  },
  {
    id: 29,
    about: "people",
    title: "New User Registered",
    time: "2026-10-04T01:50:00Z",
    relativeTime: "6h ago",
    subtitle: "Rayyan Ahmed",
    user: "Rayyan Ahmed"
  },
  {
    id: 30,
    about: "wallet",
    title: "Payout Processed",
    time: "2026-10-04T01:40:00Z",
    relativeTime: "7h ago",
    subtitle: "Vendor Settlement #8821",
    user: "Vendor #8821"
  },
  {
    id: 31,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-04T01:28:00Z",
    relativeTime: "7h ago",
    subtitle: "Mahnoor Khan",
    user: "Mahnoor Khan"
  },
  {
    id: 32,
    about: "product",
    title: "Fahad Sheikh purchased a product",
    time: "2026-10-04T01:05:00Z",
    relativeTime: "7h ago",
    subtitle: "Samsung Galaxy S24",
    user: "Fahad Sheikh"
  },
  {
    id: 33,
    about: "cart",
    title: "Anaya Noor completed payment",
    time: "2026-10-04T00:42:00Z",
    relativeTime: "8h ago",
    subtitle: "Payment #5792",
    user: "Anaya Noor"
  },
  {
    id: 34,
    about: "analytics",
    title: "Traffic Spike Detected",
    time: "2026-10-04T00:30:00Z",
    relativeTime: "8h ago",
    subtitle: "Real-time Visitors > 5,000",
    user: "Traffic Monitor"
  },
  {
    id: 35,
    about: "cart",
    title: "Saad Khan cancelled an order",
    time: "2026-10-04T00:20:00Z",
    relativeTime: "8h ago",
    subtitle: "Order #0989",
    user: "Saad Khan"
  },
  {
    id: 36,
    about: "cart",
    title: "Eman Zahid requested a refund",
    time: "2026-10-03T23:55:00Z",
    relativeTime: "8h ago",
    subtitle: "Order #0984",
    user: "Eman Zahid"
  },
  {
    id: 37,
    about: "review",
    title: "Product Rating Updated",
    time: "2026-10-03T23:40:00Z",
    relativeTime: "9h ago",
    subtitle: "Average Rating: 4.8 Stars",
    user: "Review System"
  },
  {
    id: 38,
    about: "cart",
    title: "Talha Asif placed an order",
    time: "2026-10-03T23:32:00Z",
    relativeTime: "9h ago",
    subtitle: "Order #0979",
    user: "Talha Asif"
  },
  {
    id: 39,
    about: "cart",
    title: "Areeba Hassan completed payment",
    time: "2026-10-03T23:08:00Z",
    relativeTime: "9h ago",
    subtitle: "Payment #5781",
    user: "Areeba Hassan"
  },
  {
    id: 40,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T22:45:00Z",
    relativeTime: "10h ago",
    subtitle: "Waleed Ahmed",
    user: "Waleed Ahmed"
  },
  {
    id: 41,
    about: "product",
    title: "Muneeb Raza purchased a product",
    time: "2026-10-03T22:20:00Z",
    relativeTime: "10h ago",
    subtitle: "Sony WH-1000XM5",
    user: "Muneeb Raza"
  },
  {
    id: 42,
    about: "security",
    title: "Suspicious Login Blocked",
    time: "2026-10-03T22:05:00Z",
    relativeTime: "10h ago",
    subtitle: "IP: 192.168.1.100",
    user: "Security Firewall"
  },
  {
    id: 43,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T21:55:00Z",
    relativeTime: "10h ago",
    subtitle: "Alina Shah",
    user: "Alina Shah"
  },
  {
    id: 44,
    about: "cart",
    title: "Payment Failed",
    time: "2026-10-03T21:30:00Z",
    relativeTime: "11h ago",
    subtitle: "Yahya Iqbal (Payment #5770)",
    user: "Yahya Iqbal"
  },
  {
    id: 45,
    about: "cart",
    title: "Rida Khan placed an order",
    time: "2026-10-03T21:05:00Z",
    relativeTime: "11h ago",
    subtitle: "Order #0974",
    user: "Rida Khan"
  },
  {
    id: 46,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T20:42:00Z",
    relativeTime: "12h ago",
    subtitle: "Arham Malik",
    user: "Arham Malik"
  },
  {
    id: 47,
    about: "settings",
    title: "Tax Rates Updated",
    time: "2026-10-03T20:30:00Z",
    relativeTime: "12h ago",
    subtitle: "GST Adjusted to 18%",
    user: "Finance Admin"
  },
  {
    id: 48,
    about: "cart",
    title: "Saim Ahmed completed payment",
    time: "2026-10-03T20:18:00Z",
    relativeTime: "12h ago",
    subtitle: "Payment #5764",
    user: "Saim Ahmed"
  },
  {
    id: 49,
    about: "cart",
    title: "Maha Raza requested a refund",
    time: "2026-10-03T19:55:00Z",
    relativeTime: "12h ago",
    subtitle: "Order #0968",
    user: "Maha Raza"
  },
  {
    id: 50,
    about: "product",
    title: "Hamza Siddiqui purchased a product",
    time: "2026-10-03T19:30:00Z",
    relativeTime: "13h ago",
    subtitle: "Adidas Ultraboost",
    user: "Hamza Siddiqui"
  },
  {
    id: 51,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T19:05:00Z",
    relativeTime: "13h ago",
    subtitle: "Maira Khan",
    user: "Maira Khan"
  },
  {
    id: 52,
    about: "cart",
    title: "Ibrahim Shah cancelled an order",
    time: "2026-10-03T18:40:00Z",
    relativeTime: "14h ago",
    subtitle: "Order #0961",
    user: "Ibrahim Shah"
  },
  {
    id: 53,
    about: "notification",
    title: "SMS Alert Broadcast",
    time: "2026-10-03T18:25:00Z",
    relativeTime: "14h ago",
    subtitle: "Order Delivery Status Updates",
    user: "SMS Gateway"
  },
  {
    id: 54,
    about: "cart",
    title: "Hania Ahmed completed payment",
    time: "2026-10-03T18:15:00Z",
    relativeTime: "14h ago",
    subtitle: "Payment #5751",
    user: "Hania Ahmed"
  },
  {
    id: 55,
    about: "cart",
    title: "Faris Ali placed an order",
    time: "2026-10-03T17:50:00Z",
    relativeTime: "15h ago",
    subtitle: "Order #0958",
    user: "Faris Ali"
  },
  {
    id: 56,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T17:25:00Z",
    relativeTime: "15h ago",
    subtitle: "Nimra Tariq",
    user: "Nimra Tariq"
  },
  {
    id: 57,
    about: "product",
    title: "Abdullah Khan purchased a product",
    time: "2026-10-03T17:00:00Z",
    relativeTime: "15h ago",
    subtitle: "Apple Watch Series 10",
    user: "Abdullah Khan"
  },
  {
    id: 58,
    about: "cart",
    title: "Mehwish Noor requested a refund",
    time: "2026-10-03T16:35:00Z",
    relativeTime: "16h ago",
    subtitle: "Order #0950",
    user: "Mehwish Noor"
  },
  {
    id: 59,
    about: "cart",
    title: "Shahzaib Ahmed completed payment",
    time: "2026-10-03T16:10:00Z",
    relativeTime: "16h ago",
    subtitle: "Payment #5738",
    user: "Shahzaib Ahmed"
  },
  {
    id: 60,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T15:45:00Z",
    relativeTime: "17h ago",
    subtitle: "Eshal Khan",
    user: "Eshal Khan"
  },
  {
    id: 61,
    about: "wallet",
    title: "Refund Credited to Wallet",
    time: "2026-10-03T15:30:00Z",
    relativeTime: "17h ago",
    subtitle: "Amount: $45.00",
    user: "Wallet System"
  },
  {
    id: 62,
    about: "cart",
    title: "Haris Raza cancelled an order",
    time: "2026-10-03T15:20:00Z",
    relativeTime: "17h ago",
    subtitle: "Order #0942",
    user: "Haris Raza"
  },
  {
    id: 63,
    about: "cart",
    title: "Zoya Ahmed placed an order",
    time: "2026-10-03T14:55:00Z",
    relativeTime: "18h ago",
    subtitle: "Order #0939",
    user: "Zoya Ahmed"
  },
  {
    id: 64,
    about: "cart",
    title: "Ammar Sheikh completed payment",
    time: "2026-10-03T14:30:00Z",
    relativeTime: "18h ago",
    subtitle: "Payment #5729",
    user: "Ammar Sheikh"
  },
  {
    id: 65,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T14:05:00Z",
    relativeTime: "18h ago",
    subtitle: "Komal Iqbal",
    user: "Komal Iqbal"
  },
  {
    id: 66,
    about: "product",
    title: "Huzaifa Malik purchased a product",
    time: "2026-10-03T13:40:00Z",
    relativeTime: "19h ago",
    subtitle: "Logitech MX Master 3S",
    user: "Huzaifa Malik"
  },
  {
    id: 67,
    about: "cart",
    title: "Saira Khan requested a refund",
    time: "2026-10-03T13:15:00Z",
    relativeTime: "19h ago",
    subtitle: "Order #0928",
    user: "Saira Khan"
  },
  {
    id: 68,
    about: "analytics",
    title: "Conversion Rate Calculated",
    time: "2026-10-03T13:00:00Z",
    relativeTime: "19h ago",
    subtitle: "Current Rate: 3.4%",
    user: "Analytics Bot"
  },
  {
    id: 69,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T12:50:00Z",
    relativeTime: "20h ago",
    subtitle: "Rehan Ahmed",
    user: "Rehan Ahmed"
  },
  {
    id: 70,
    about: "cart",
    title: "Amina Raza placed an order",
    time: "2026-10-03T12:25:00Z",
    relativeTime: "20h ago",
    subtitle: "Order #0923",
    user: "Amina Raza"
  },
  {
    id: 71,
    about: "cart",
    title: "Sameer Khan completed payment",
    time: "2026-10-03T12:00:00Z",
    relativeTime: "20h ago",
    subtitle: "Payment #5712",
    user: "Sameer Khan"
  },
  {
    id: 72,
    about: "product",
    title: "Maryam Ali purchased a product",
    time: "2026-10-03T11:35:00Z",
    relativeTime: "21h ago",
    subtitle: "JBL Charge 5",
    user: "Maryam Ali"
  },
  {
    id: 73,
    about: "cart",
    title: "Yasir Mahmood cancelled an order",
    time: "2026-10-03T11:10:00Z",
    relativeTime: "21h ago",
    subtitle: "Order #0915",
    user: "Yasir Mahmood"
  },
  {
    id: 74,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T10:45:00Z",
    relativeTime: "22h ago",
    subtitle: "Anum Farooq",
    user: "Anum Farooq"
  },
  {
    id: 75,
    about: "cart",
    title: "Payment Failed",
    time: "2026-10-03T10:20:00Z",
    relativeTime: "22h ago",
    subtitle: "Saif Ahmed (Payment #5701)",
    user: "Saif Ahmed"
  },
  {
    id: 76,
    about: "cart",
    title: "Aleena Shah requested a refund",
    time: "2026-10-03T09:55:00Z",
    relativeTime: "22h ago",
    subtitle: "Order #0907",
    user: "Aleena Shah"
  },
  {
    id: 77,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T09:30:00Z",
    relativeTime: "23h ago",
    subtitle: "Noman Raza",
    user: "Noman Raza"
  },
  {
    id: 78,
    about: "cart",
    title: "Sana Malik placed an order",
    time: "2026-10-03T09:05:00Z",
    relativeTime: "23h ago",
    subtitle: "Order #0902",
    user: "Sana Malik"
  },
  {
    id: 79,
    about: "product",
    title: "Faizan Ali purchased a product",
    time: "2026-10-03T08:40:00Z",
    relativeTime: "24h ago",
    subtitle: "Dell Inspiron 15",
    user: "Faizan Ali"
  },
  {
    id: 80,
    about: "cart",
    title: "Maham Hassan completed payment",
    time: "2026-10-03T08:15:00Z",
    relativeTime: "1d ago",
    subtitle: "Payment #5689",
    user: "Maham Hassan"
  },
  {
    id: 81,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T07:50:00Z",
    relativeTime: "1d ago",
    subtitle: "Rayan Siddiqui",
    user: "Rayan Siddiqui"
  },
  {
    id: 82,
    about: "cart",
    title: "Aiman Noor cancelled an order",
    time: "2026-10-03T07:25:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0894",
    user: "Aiman Noor"
  },
  {
    id: 83,
    about: "cart",
    title: "Dawood Khan requested a refund",
    time: "2026-10-03T07:00:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0889",
    user: "Dawood Khan"
  },
  {
    id: 84,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T06:35:00Z",
    relativeTime: "1d ago",
    subtitle: "Inaya Ahmed",
    user: "Inaya Ahmed"
  },
  {
    id: 85,
    about: "cart",
    title: "Shayan Raza placed an order",
    time: "2026-10-03T06:10:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0883",
    user: "Shayan Raza"
  },
  {
    id: 86,
    about: "cart",
    title: "Eman Khan completed payment",
    time: "2026-10-03T05:45:00Z",
    relativeTime: "1d ago",
    subtitle: "Payment #5668",
    user: "Eman Khan"
  },
  {
    id: 87,
    about: "product",
    title: "Musa Ahmed purchased a product",
    time: "2026-10-03T05:20:00Z",
    relativeTime: "1d ago",
    subtitle: "Canon EOS R50",
    user: "Musa Ahmed"
  },
  {
    id: 88,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T04:55:00Z",
    relativeTime: "1d ago",
    subtitle: "Hiba Raza",
    user: "Hiba Raza"
  },
  {
    id: 89,
    about: "cart",
    title: "Junaid Malik cancelled an order",
    time: "2026-10-03T04:30:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0871",
    user: "Junaid Malik"
  },
  {
    id: 90,
    about: "cart",
    title: "Amna Tariq completed payment",
    time: "2026-10-03T04:05:00Z",
    relativeTime: "1d ago",
    subtitle: "Payment #5653",
    user: "Amna Tariq"
  },
  {
    id: 91,
    about: "cart",
    title: "Adeel Khan requested a refund",
    time: "2026-10-03T03:40:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0865",
    user: "Adeel Khan"
  },
  {
    id: 92,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T03:15:00Z",
    relativeTime: "1d ago",
    subtitle: "Rimsha Ahmed",
    user: "Rimsha Ahmed"
  },
  {
    id: 93,
    about: "cart",
    title: "Waqas Ali placed an order",
    time: "2026-10-03T02:50:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0861",
    user: "Waqas Ali"
  },
  {
    id: 94,
    about: "product",
    title: "Areej Shah purchased a product",
    time: "2026-10-03T02:25:00Z",
    relativeTime: "1d ago",
    subtitle: "Kindle Paperwhite",
    user: "Areej Shah"
  },
  {
    id: 95,
    about: "cart",
    title: "Kashif Raza completed payment",
    time: "2026-10-03T02:00:00Z",
    relativeTime: "1d ago",
    subtitle: "Payment #5631",
    user: "Kashif Raza"
  },
  {
    id: 96,
    about: "people",
    title: "User Profile Updated",
    time: "2026-10-03T01:35:00Z",
    relativeTime: "1d ago",
    subtitle: "Sadia Noor",
    user: "Sadia Noor"
  },
  {
    id: 97,
    about: "cart",
    title: "Taha Ahmed cancelled an order",
    time: "2026-10-03T01:10:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0852",
    user: "Taha Ahmed"
  },
  {
    id: 98,
    about: "cart",
    title: "Misha Khan requested a refund",
    time: "2026-10-03T00:45:00Z",
    relativeTime: "1d ago",
    subtitle: "Order #0847",
    user: "Misha Khan"
  },
  {
    id: 99,
    about: "people",
    title: "New User Registered",
    time: "2026-10-03T00:20:00Z",
    relativeTime: "1d ago",
    subtitle: "Rashid Ali",
    user: "Rashid Ali"
  },
  {
    id: 100,
    about: "settings",
    title: "System Config Updated",
    time: "2026-10-02T23:55:00Z",
    relativeTime: "1d ago",
    subtitle: "Maintenance Mode Toggled Off",
    user: "System Config Bot"
  }
];

export default activity;