export async function GET() {
    return new Response(
        JSON.stringify("Un po' di solido backend JS"),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
}