FROM node:20-alpine3.18 as build

WORKDIR /opt/docusaurus

COPY . ./

RUN npm install

RUN npm run build

FROM nginx:1.25.4-alpine3.18

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/docusaurus/build /var/docusaurus

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
