const envVariables = {
    port: process.env.PORT || 3000,
    URI: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME,
    refreshSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshExpiry: process.env.REFRESH_TOKEN_EXPIRY,
    accessSecret: process.env.ACCESS_TOKEN_EXPIRY,
    accessExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    origin: process.env.CORS_ORIGIN,
};

export { envVariables };
