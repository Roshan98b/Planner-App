# Stage 1
FROM node:alpine as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /var/www/PlannerApp
CMD nginx -g "daemon off;"