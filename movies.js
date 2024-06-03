// Clave de API y token de acceso
const apiKey = 'e66a821399c1f234758607eaed423bb9'; 
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjZhODIxMzk5YzFmMjM0NzU4NjA3ZWFlZDQyM2JiOSIsInN1YiI6IjY2NWUzNmYzYzAxY2VjMGFmNDJmMjdjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xf45GrJPYsoTDOpvROgfcOs3hwwlVNk0FPa_vpy4bto'; // Tu token de acceso de lectura

// URL de la API para obtener películas populares
const popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

// Elemento donde se mostrarán las películas
const moviesGrid = document.getElementById('moviesGrid');

// Número de películas por página
const moviesPerPage = 18;
let currentPage = 1;

// Función para obtener y mostrar las películas
function fetchMovies(page = 1) {
    const url = `${popularMoviesUrl}&page=${page}`;

    fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        displayMovies(data.results);
        currentPage = page;
    })
    .catch(error => {
        console.error('Error al obtener películas:', error);
    });
}

// Función para mostrar las películas en el HTML
function displayMovies(movies) {
    moviesGrid.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <div class="movieTitle">
                
            </div>
        `;
        moviesGrid.appendChild(movieElement);
    });

}

// Inicializa la pagina con las peliculas
fetchMovies();

// botón de "Anterior"
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        fetchMovies(currentPage - 1);
    }
});

// botón de Siguiente
document.getElementById('nextPage').addEventListener('click', () => {
    fetchMovies(currentPage + 1);
});

// Función para manejar la búsqueda de películas
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    if (!searchInput.trim()) {
        return;
    }
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`;

    fetch(searchUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        displayMovies(data.results);
    })
    .catch(error => {
        console.error('Error al buscar películas:', error);
    });
}

// botón de busqueda
document.getElementById('searchButton').addEventListener('click', () => {
    searchMovies();
});

// la tecla "Enter" en el campo de búsqueda
document.getElementById('searchInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        searchMovies();
    }
});
