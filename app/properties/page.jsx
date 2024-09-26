import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/request.js";

const PropertiesPage = async () => {
    const properties = await fetchProperties();
    console.log(properties);
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <PropertyCard property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default PropertiesPage;
