

export default class Api {

    #API_ENDPOINT = "https://taifotografia.com.br/api.php";

    async getAll() {
        return await fetch(this.#API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            return data;  
        });
    }

    async getBySlug(slug) {
        return await fetch(`${this.#API_ENDPOINT}?slug=${slug}`)
        .then((response) => response.json())
        .then((data) => {
            return data;  
        });
    }
}