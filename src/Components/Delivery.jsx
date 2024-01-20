import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="w-full  flex items-center justify-center px-4 py-10">
        <h3 className="text-orange-400 font-bold text-2xl text-center">
          Quick Delivery App
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="md:grid w-[1440px]  grid-cols-2 mx-10 my-10">
          <img
            className=""
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          ></img>
          <div className="flex flex-col  justify-center">
            <p className="text-blue-300 font-bold text-[18px]">Get The App</p>
            <h1 className="font-bold text-orange-400 text-[24px] ">
              Limitless Convenience on-demand
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc
            </p>
            <button className="bg-blue-300 p-2 w-[140px] my-4 text-black font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
