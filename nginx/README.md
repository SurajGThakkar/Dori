# Nginx Load Balancer for Dori Fashion

This directory contains the Nginx configuration for load balancing the Dori Fashion website across multiple application servers.

## Overview

The load balancer setup provides:

- Distribution of traffic across multiple application instances
- SSL termination for HTTPS connections
- Static content caching
- Health checks for high availability
- Automatic failover to healthy servers

## Configuration

The main configuration file is `nginx.conf`, which defines:

- Upstream server groups for load balancing
- HTTP to HTTPS redirection
- SSL/TLS settings
- Proxy settings for forwarding requests
- Caching rules for static assets
- Health check endpoints

## Local Development

To test the load balancer locally:

1. Make sure Docker and Docker Compose are installed
2. Generate self-signed SSL certificates (see `ssl/README.md`)
3. Run the stack with Docker Compose:

```bash
docker-compose up -d
```

4. Access the site at https://localhost

## Production Deployment

For production deployment:

1. Update the `upstream` section in `nginx.conf` with your actual server addresses
2. Obtain proper SSL certificates from a trusted CA
3. Deploy using the GitHub workflow or your preferred deployment method
4. Configure DNS to point to your load balancer

## Scaling

To scale the application:

1. Add more application servers to the `docker-compose.yml` file
2. Update the `upstream` section in `nginx.conf`
3. Redeploy the stack

## Monitoring

The `/health` endpoint can be used to monitor the status of the load balancer and application servers.