// import SQLite from "react-native-sqlite-storage";

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// // Open the database connection
// const db = SQLite.openDatabase({ name: "ICT_bus.db", createFromLocation: 1 });

// // Create the "booking" table with the specified attributes
// const createBookingTable = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction((txn) => {
//       txn.executeSql(
//         `CREATE TABLE IF NOT EXISTS booking (
//           ID INTEGER PRIMARY KEY AUTOINCREMENT,
//           session TEXT,
//           point TEXT,
//           date DATE DEFAULT (date('now')),
//           time TIME DEFAULT (time('now'))
//         )`,
//         [],
//         (txn, results) => {
//           console.log("Booking table created successfully");
//           resolve(results);
//         },
//         (txn, error) => {
//           console.error("Error creating booking table: ", error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Save a new booking record to the database
// const saveBookingRecord = (session, point) => {
//   return new Promise((resolve, reject) => {
//     db.transaction((txn) => {
//       txn.executeSql(
//         `INSERT INTO booking (session, point) VALUES (?, ?)`,
//         [session, point],
//         (txn, results) => {
//           console.log("Record saved successfully");
//           resolve(results);
//         },
//         (txn, error) => {
//           console.error("Error saving record: ", error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Retrieve all booking records
// const getAllBookingRecords = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction((txn) => {
//       txn.executeSql(
//         `SELECT * FROM booking`,
//         [],
//         (txn, results) => {
//           const parsedResults = results.rows.raw();
//           console.log(
//             "All booking records retrieved successfully: ",
//             parsedResults
//           );
//           resolve(parsedResults);
//         },
//         (txn, error) => {
//           console.error("Error retrieving booking records: ", error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Delete a booking record by ID
// const deleteBookingRecord = (id) => {
//   return new Promise((resolve, reject) => {
//     db.transaction((txn) => {
//       txn.executeSql(
//         `DELETE FROM booking WHERE ID = ?`,
//         [id],
//         (txn, results) => {
//           console.log(`Record with ID ${id} deleted successfully`);
//           resolve(results);
//         },
//         (txn, error) => {
//           console.error(`Error deleting record with ID ${id}: `, error);
//           reject(error);
//         }
//       );
//     });
//   });
// };

// // Initialize the booking table on app startup
// createBookingTable();

// // Export the functions for use in other modules
// export { saveBookingRecord, getAllBookingRecords, deleteBookingRecord };
