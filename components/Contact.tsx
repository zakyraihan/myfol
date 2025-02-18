import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  nama: string;
  email: string;
  keterangan: string;
  pesan: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("xanqlkkb");
  
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    keterangan: "",
    pesan: "",
  });
  
  const showSuccessNotification = () => {
    toast.success("Pesan Anda Terkirim!");
  };
  
  const isFormValid = (): boolean => {
    if (formData.nama.length < 3) {
      toast.error("Nama harus lebih dari 3 karakter!");
      return false;
    }
    return true;
  };
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!isFormValid()) return;
  
    await handleSubmit(event);
  
    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        nama: "",
        email: "",
        keterangan: "",
        pesan: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[5rem] pb-[3rem] bg-white dark:bg-dark">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini" id="contact">
            Mari Terhubung
          </p>
          <h1 className="heading__primary">
            Hubungi <span className="text-primary">Saya</span>{" "}
          </h1>
          <p className="text-[15px] opacity-75 text-black dark:text-white mt-[1rem]">
            Dengan pengalaman dan dedikasi, saya siap membantu Anda mencapai
            visi yang Anda impikan.
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-primary underline font-bold">
            +62 857-8056-0420
          </h1>
        </div>

        <div>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center ">
              <input
                type="text"
                placeholder="Nama"
                value={formData.nama}
                name="nama"
                className="py-[0.7rem] outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
                required
                onChange={handleInputChange}
              />

              <input
                value={formData.email}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="py-[0.7rem] outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
                required
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <input
              value={formData.keterangan}
              type="text"
              placeholder="Keterangan"
              name="keterangan"
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua rounded-md px-4"
              required
              onChange={handleInputChange}
            />

            <textarea
              value={formData.pesan}
              placeholder="Pesan"
              name="pesan"
              id="pesan"
              rows={4}
              className="py-[0.7rem] w-full outline-none text-black dark:text-white placeholder:dark:text-white  bg-black/10 dark:bg-darkTua px-4 rounded-md"
              required
              onChange={handleInputChange}
            ></textarea>
            <ValidationError
              prefix="pesan"
              field="pesan"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full text-white bg-primary hover:bg-teal-400 rounded-md px-4 font-semibold"
            >
              {state.submitting ? "Mengirim..." : "Kirim"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
