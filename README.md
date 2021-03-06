# The movie database explorer

SPA for displaying content form TMDB API

Link to the web page [here](https://onlinemoviedb.herokuapp.com)

## Local configuration

1. Get an API Key from [TMDB](https://www.themoviedb.org/)
2. Create an .env file at the project root.
3. Add the following lines to the file

   ```
   REACT_APP_API_KEY=<your_api_key>
   REACT_APP_API_URL="https://api.themoviedb.org/3/"
   ```

4. Make sure you have the project dependencies installed by running

`npm install #or yarn install`

### Run the development server

1. Run the development server
   ` npm start`
2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
