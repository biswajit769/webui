FROM node:10-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm add @ng-bootstrap/ng-bootstrap@3
RUN npm add @ng-bootstrap/schematics
RUN npm install jquery popper.js --save
RUN npm install --save ng2-scroll-to-el
RUN npm install --save rxjs-compat
RUN npm install angular-inline-editors --save
RUN npm install moment --save
RUN npm install angular-checklist --save
RUN npm install --save angular-archwizard
RUN $(npm bin)/ng build --prod

# stage 2
FROM nginx:1.14.1-alpine
COPY --from=builder /app/dist/rtm2-forntend /usr/share/nginx/html