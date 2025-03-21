# SSL Certificates for Dori Fashion

This directory should contain the following SSL certificate files for HTTPS:

- `dori.crt` - SSL certificate file
- `dori.key` - SSL private key file

## Important Security Notes

1. Never commit actual SSL certificate files to the repository
2. In production, use proper certificate management and secure storage
3. For local development, you can generate self-signed certificates

### Generating Self-Signed Certificates for Development

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout dori.key -out dori.crt
```

For production, obtain certificates from a trusted Certificate Authority (CA) like Let's Encrypt.