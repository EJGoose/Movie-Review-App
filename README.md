# Movie Review App
### Project Description
This Movie Review App, fetches data about various popular movies and dynamically displays it. The app allows users to see review ratings for various films and allows the user to filter these films according to review preference.  

#### This Project explores:
- Planning and layout projects in React
- Creating reusable components
- Working with APIs
- Filtering and Sorting data
- Type management for React Props
- Advanced React Hooks

#### Key Features
The App allows users to fetch a list of popular movies from the Movie Database, read key details about each movie, and visit that movie's page on the database for more information. Alongside this the app allows users to filter movies based on a minimum review value that they want to see. 


#### Components and utilities breakdown
- FilterMovies - Simple component that returns a customisable filter block. It returns a list of buttons allowing the user to filter the movies displayed by minimum rating.
- Header - simple header component that displays a logo, and customisable page title and a strapline
- Movie - Primary component of the app which handles, state, fetching data from the API and populating the HTML skeleton of the page.
- WatchMovies -  takes movie data from Movie and creates a card populated with the relevant data for each movie. 
- App - manages overall strucutre of the main application page.
