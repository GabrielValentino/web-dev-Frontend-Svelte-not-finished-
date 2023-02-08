<script>
    import axios from 'axios';
    import {onMount} from "svelte";

    let locations = [];

    async function fetchLocations() {
        try {
            const response = await axios.get('/locations');
            locations = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    onMount(async () => {
        await fetchLocations();
    });
</script>

{#if locations.length === 0}
    <p>Loading...</p>
{:else}
    <ul>
        {#each locations as location}
            <li>{location.filmType}</li>
            <li>{location.filmProducerName}</li>
            <li>{location.endDate}</li>
            <li>{location.filmName}</li>
            <li>{location.district}</li>
            <li>{location.geolocation}</li>
            <li>{location.coordinates}</li>
            <li>{location.type}</li>
            <li>{location.sourceLocationId}</li>
            <li>{location.filmDirectorName}</li>
            <li>{location.address}</li>
            <li>{location.startDate}</li>
            <li>{location.year}</li>
        {/each}
    </ul>
{/if}