
export default () => ({
    port: parseInt(process.env.PORT) || 8000,
    mongo_url_db: process.env.MONGO_URL_DB,
    email_host: process.env.EMAIL_HOST,
    email_port: parseInt(process.env.EMAIL_PORT),
    auth_user: process.env.AUTH_USER,
    auth_pass: process.env.AUTH_PASS,
    endpoint_dc: process.env.ENDPOINT_DC,
    access_key_dc: process.env.ACCESS_KEY_DC,
    secret_access_key_dc: process.env.SECRET_ACCES_KEY_DC,
    name_bucket: process.env.NAME_BUCKET
  });