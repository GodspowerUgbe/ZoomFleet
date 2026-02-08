import { MdOutlineVerifiedUser,MdSupportAgent } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
const features = [
  {
    icon: <MdOutlineVerifiedUser />,
    title: 'Fast Approval',
    description: 'Get behind the wheel in minutes. Our digital verification process is seamless and secure.',
  },
  {
    icon: <IoDiamondOutline />,
    title: 'Premium Fleet',
    description: "Our collection features the newest models from the world's most prestigious manufacturers.",
  },
  {
    icon: <MdSupportAgent />,
    title: '24/7 Concierge',
    description: 'Dedicated support team available around the clock to assist with your rental or purchase.',
  },
]

export default function ValuePropositions() {
  return (
    <section className="bg-charcoal py-36 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}