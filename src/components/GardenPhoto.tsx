import gardenPhoto from "@/assets/garden-photo.png";

const GardenPhoto = () => (
  <section className="section-padding">
    <div className="flex justify-center">
      <img
        src={gardenPhoto}
        alt="Zeleninová zahrada"
        className="w-3/4 rounded-2xl object-cover max-h-[500px]"
      />
    </div>
  </section>
);

export default GardenPhoto;
