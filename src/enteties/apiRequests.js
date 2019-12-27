

export default class ApiRequests {
    constructor(data,coords) {
        this.data = data;
        this.latitude = 31.771959//coords.latitude
        this.longitude = 35.217018//coords.longitude
    }

    async getMapPositions() {
        try {
            let response = await fetch(
              `https://liddap.com/api/places.json?${this.data}&lng=${this.longitude}&lat=${this.latitude}`,
            );
            let responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
          }
    }
}