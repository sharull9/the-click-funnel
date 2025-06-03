import { Mail, MapPin, Phone, SendIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Alert, AlertDescription } from "../Reusable/Alert";
import { Input } from "../Reusable/Input";
import { Textarea } from "../Reusable/Textarea";

const details = {
  phone: ["+91-8920658919", "+91-7011606003"],
  email: "info@theclickfunnel.com",
  address: "165/166, Pkt-25,Sec-24 Rohini, Delhi-110085",
};

export default function GetInTouchForm() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [showFeedback, setShowFeedback] = useState({
    message: "",
    status: false,
  });

  const showAlert = () => {
    setIsAlertVisible(true);
  };
  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    hideAlert();
    try {
      const response = await fetch("https://theclickfunnel.in/mail.class.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      await response.text();
      setShowFeedback({
        message: "Thank you for your message. \n We'll get back to you soon.",
        status: true,
      });
    } catch {
      setShowFeedback({
        message: "Something went wrong. Please try again later.",
        status: false,
      });
    } finally {
      showAlert();
    }
  };

  return (
    <section id="contactus" className="w-full bg-gray-100 py-16">
      <div className="w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        <div className="bg-gradient-to-br from-blue-700 via-blue-700 to-gray-200 rounded-3xl p-6 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get in touch
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  We’d love to hear from you. Let's talk about it!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-200" />
                  </div>
                  <span className="text-lg font-medium">
                    {details.phone.map((phone, index) => (
                      <div key={phone}>
                        <a href={`tel:${phone}`}>{phone}</a>
                        {index < details.phone.length - 1 && ", "}
                      </div>
                    ))}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-200" />
                  </div>
                  <span className="text-lg font-medium">
                    <a href={`mailto:${details.email}`}>{details.email}</a>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="text-lg font-medium leading-relaxed">
                    {details.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">
                      Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-gray-700 font-medium"
                    >
                      Phone number*
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="comments"
                    className="text-gray-700 font-medium"
                  >
                    Comments
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Enter your comments"
                    className="border-gray-300 placeholder:text-gray-400 text-black min-h-[120px] resize-none focus:border-black"
                  />
                </div>

                {isAlertVisible && (
                  <>
                    <Alert
                      variant={showFeedback.status ? "destructive" : ""}
                      className={cn(
                        "flex justify-between items-center pr-2 [&>svg+div]:translate-y-0",
                        showFeedback.status &&
                          "border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600"
                      )}
                    >
                      <AlertDescription>
                        {showFeedback.message}
                      </AlertDescription>
                      <button
                        className="!pl-0 cursor-pointer"
                        onClick={hideAlert}
                      >
                        <XIcon className="h-5 w-5" />
                      </button>
                    </Alert>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 cursor-pointer text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <SendIcon className="size-4" />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
