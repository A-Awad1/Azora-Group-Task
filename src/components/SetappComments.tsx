const comments = [
  {
    id: 1,
    color: "#71719a",
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    site: "twitter",
    name: "Arash Pourhabibi",
    mail: "@ArashPourhabibi",
  },
  {
    id: 2,
    color: "#D9AE89",
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    site: "instagram",
    name: "Mauricio Sanchez",
    mail: "@m741s",
  },
  {
    id: 3,
    color: "#765070",
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    site: "facebook",
    name: "Meredith Sweet",
    mail: "@meredith.sweet.silberstein",
  },
];

export default function SetappComments() {
  return (
    <div className="small-container">
      <section className="flex flex-col pt-[145px] pb-[25px] gap-[25px]">
        <div className="flex justify-between items-center gap-[15px] flex-col md:flex-row">
          <h2 className="font-semibold text-[36px] text-dark">Setapp in your words.</h2>
          <p className="max-w-[300px] text-[18px] text-dark leading-8 pt-2">
            What you say about how Setapp powers you up.
          </p>
          <div className="flex items-center gap-[10px]">
            <button>
              <img src="/sites-icons/facebook-circle.svg" alt="facebook icon" />
            </button>
            <button>
              <img src="/sites-icons/twitter-circle.svg" alt="twitter icon" />
            </button>
            <button>
              <img src="/sites-icons/instagram-circle.svg" alt="instagram icon" />
            </button>
            <button>
              <img src="/sites-icons/youtube-circle.svg" alt="youtube icon" />
            </button>
          </div>
        </div>
        <div className="self-end flex gap-[46px]">
          <button>
            <img src="/left-angle-dark.svg" alt="angle icon" />
          </button>
          <button>
            <img src="/right-angle-dark.svg" alt="angle icon" />
          </button>
        </div>
        <div className="grid gap-[20px] lg:grid-cols-3">
          {comments.map((comment, i) => (
            <div key={comment.id} className="rounded-[15px] p-[7px] bg-[#F5F5F5] flex flex-col">
              <p
                className={`grow rounded-middle font-medium text-[26px] py-[38px] px-[20px] md:min-h-fit lg:h-[300px]`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.text}
              </p>
              <div className="flex items-center justify-between gap-3 px-[22px] pt-[38px] pb-[20px]">
                <div className="font-semibold flex flex-col">
                  <span className="text-dark text-[18px]">{comment.name}</span>
                  <span className="text-[#9F9F9F] text-[14px]">{comment.mail}</span>
                </div>
                <img src={`/sites-icons/${comment.site}.svg`} alt={`${comment.site} icon`} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-[25px]">
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i}
              className={`${
                i === 0 ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
              } rounded-full w-[12px] aspect-square`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
}
