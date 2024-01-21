FROM node:lts-alpine3.18 as builder
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm install
## Build the static site.
RUN npm run build

FROM caddy:2-alpine as caddy
## Copy the Caddyfile.
COPY --from=builder /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
## Copy the Docusaurus build output.
COPY --from=builder /opt/docusaurus/build /var/docusaurus