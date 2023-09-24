// Configure your SQL Server connection
const config = {
    user: 'yaadi',
    password: 'password',
    server: 'DESKTOP-VH0V31O\KGMEXPRESS', // Replace 192.168.225.135
    database: 'KGMERP_Bawa2',
    pool: {
      max: 10, // Maximum number of connections
      min: 0, // Minimum number of connections
      idleTimeoutMillis: 30000, // Time in milliseconds a connection can be idle before being released
    },
    options: {
      encrypt: true, // Use encryption (true/false)
      trustServerCertificate: false, // Set to true for self-signed certificates
    },
};