import data from "@/data.json";


export default async function Page({ params }) {
    const slug = await params;
    const { countryId } = slug;

    //console.log(data)
    const countryData = data.find(country => country.name === countryId)
    console.log("Found", countryData)

    return (
        <>
            <div>
                <div>Country: {countryId}</div>
            </div>
        </>
    );
}