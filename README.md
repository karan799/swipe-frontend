# Automated Data Extraction and Invoice Management(currently improving)

## Overview  
This React-based application, **Swipe Invoice Manager**, automates the extraction, processing, and organization of invoice data from various file formats, including PDFs, images, and Excel files. The extracted data is dynamically updated and displayed across three main tabs: **Invoices**, **Products**, and **Customers**. The app leverages AI-based data extraction for robust processing and ensures real-time synchronization of data using Redux.

---

## Features

### 1. File Uploads & AI-Powered Data Extraction  
- **Supported File Formats**:  
  - **Excel Files**: Transaction details (serial number, customer info, totals, etc.).  
  - **PDF and Images**: Invoices containing customer and item details, totals, tax, etc.  
- **Generic AI-based Extraction**:  
  - Utilizes **Google Gemini API** for document and vision processing to identify and extract relevant fields.  
  - Handles cases with missing or incomplete data and provides user-friendly prompts to address gaps.

---

### 2. Organized Data Presentation  
#### **Tabs Structure**:
1. **Invoices Tab**:
   - Displays key details like Serial Number, Customer Name, Product Name, Quantity, Tax, Total Amount, and Date.
   - Dynamically updates when Products or Customers data is modified.

2. **Products Tab**:
   - Columns include Product Name, Quantity, Unit Price, Tax, and Price with Tax.  
   - Additional column for Discounts to provide more insights.

3. **Customers Tab**:
   - Columns include Customer Name, Phone Number, and Total Purchase Amount.  
   - Supports additional fields like Email and Address for extended customer information.

---

### 3. Centralized State Management
- Built with **React Redux** for centralized and consistent data handling.
- Real-time synchronization across tabs:  
  - Changes in the Products or Customers tab instantly reflect in the Invoices tab and vice versa.

---

### 4. Validation and Error Handling
- **Data Validation**: Ensures extracted data is complete and accurate.
- **Error Handling**:
  - Provides feedback for unsupported file formats or extraction issues.
  - Highlights missing fields and prompts users to complete the data in a user-friendly manner.

---

