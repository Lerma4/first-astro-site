<script>
    let count = 0;
</script>

<div class="p-4 border rounded-lg shadow-md text-center">
    <h1 class="text-2xl font-bold mb-4">Svelte Counter: {count}</h1>
    <div class="space-x-4">
        <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            on:click={() => (count += 1)}
        >
            Increment
        </button>
        <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            on:click={() => (count -= 1)}
        >
            Decrement
        </button>
    </div>
</div>
