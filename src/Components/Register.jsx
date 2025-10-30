import React from "react";
import { toast } from "react-toastify";

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = {
      applicantName: form.applicantName.value,
      memberNo: form.memberNo.value,
      fatherName: form.fatherName.value,
      motherName: form.motherName.value,

      presentVillage: form.presentVillage.value,
      presentPost: form.presentPost.value,
      presentUpazila: form.presentUpazila.value,
      presentDistrict: form.presentDistrict.value,

      permanentVillage: form.permanentVillage.value,
      permanentPost: form.permanentPost.value,
      permanentUpazila: form.permanentUpazila.value,
      permanentDistrict: form.permanentDistrict.value,

      nid: form.nid.value,
      birthDate: form.birthDate.value,
      profession: form.profession.value,
      nationality: form.nationality.value,
      religion: form.religion.value,
      mobile1: form.mobile1.value,
      mobile2: form.mobile2.value,
    };

    fetch("http://localhost:3000/applicant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Server response:", result);
        toast.success("🎉 ফর্মটি সফলভাবে জমা হয়েছে!");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex justify-center items-center py-10 px-4 font-[Kalpurush]">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-blue-300">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 border-b-2 border-blue-300 pb-2">
          সদস্য আবেদন ফর্ম
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* আবেদনকারীর নাম ও সদস্য নং */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label-text font-semibold text-blue-700">আবেদনকারীর নাম:</label>
              <input type="text" name="applicantName" className="input input-bordered w-full border-blue-300 focus:border-blue-500" required />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">সদস্য নং:</label>
              <input type="text" name="memberNo" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
          </div>

          {/* পিতা/স্বামী ও মাতার নাম */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label-text font-semibold text-blue-700">পিতা/স্বামীর নাম:</label>
              <input type="text" name="fatherName" className="input input-bordered w-full border-blue-300 focus:border-blue-500" required />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">মাতার নাম:</label>
              <input type="text" name="motherName" className="input input-bordered w-full border-blue-300 focus:border-blue-500" required />
            </div>
          </div>

          {/* বর্তমান ঠিকানা */}
          <div>
            <h2 className="font-bold text-blue-600 mt-3 mb-2">বর্তমান ঠিকানা:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label-text text-blue-700">গ্রাম:</label>
                <input type="text" name="presentVillage" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">ডাকঘর:</label>
                <input type="text" name="presentPost" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">উপজেলা:</label>
                <input type="text" name="presentUpazila" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">জেলা:</label>
                <input type="text" name="presentDistrict" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
            </div>
          </div>

          {/* স্থায়ী ঠিকানা */}
          <div>
            <h2 className="font-bold text-blue-600 mt-3 mb-2">স্থায়ী ঠিকানা:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label-text text-blue-700">গ্রাম:</label>
                <input type="text" name="permanentVillage" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">ডাকঘর:</label>
                <input type="text" name="permanentPost" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">উপজেলা:</label>
                <input type="text" name="permanentUpazila" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
              <div>
                <label className="label-text text-blue-700">জেলা:</label>
                <input type="text" name="permanentDistrict" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
              </div>
            </div>
          </div>

          {/* NID ও জন্ম তারিখ */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label-text font-semibold text-blue-700">NID / জন্ম নিবন্ধন নং:</label>
              <input type="text" name="nid" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">জন্ম তারিখ:</label>
              <input type="date" name="birthDate" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
          </div>

          {/* পেশা, জাতীয়তা, ধর্ম */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="label-text font-semibold text-blue-700">পেশা:</label>
              <input type="text" name="profession" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">জাতীয়তা:</label>
              <input type="text" name="nationality" defaultValue="বাংলাদেশী" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">ধর্ম:</label>
              <input type="text" name="religion" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
          </div>

          {/* মোবাইল নম্বর */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label-text font-semibold text-blue-700">মোবাইল নং (১):</label>
              <input type="text" name="mobile1" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
            <div>
              <label className="label-text font-semibold text-blue-700">মোবাইল নং (২):</label>
              <input type="text" name="mobile2" className="input input-bordered w-full border-blue-300 focus:border-blue-500" />
            </div>
          </div>

          <div className="pt-4">
            <button
              className="btn bg-blue-600 hover:bg-blue-700 text-white w-full text-lg font-semibold tracking-wide transition-all"
            >
              সাবমিট কর
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
