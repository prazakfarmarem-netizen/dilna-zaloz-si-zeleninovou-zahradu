import gardenPhoto from "@/assets/garden-photo.png";

const GardenPhoto = () => (
  <section className="section-padding">
    <div className="flex flex-col items-center">
      <img
        src={gardenPhoto}
        alt="Zeleninová zahrada"
        className="w-3/4 rounded-2xl object-cover max-h-[500px]"
      />
      <p className="mt-3 text-sm text-[hsl(30,30%,40%)] italic">Naše rodinná farma, červen 2025</p>
    </div>
  </section>
);

export default GardenPhoto;
