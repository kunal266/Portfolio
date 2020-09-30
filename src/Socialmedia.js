import React from "react";
export default function SocialMedia(props){
  let str = "flex justify-center xsmm:" + props.value
    return(
        <div className= {str}>
            <div className="pr-24 tiny:pr-20">
              <div className="flex justify-left pb-2 pt-3">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github logo"
                  className="rounded-full h-6 w-6 flex items-center justify-center"
                ></img>
                <a
                  href="https://github.com/kunal266"
                  target="_blank"
                  className="text-yellow-400 pl-2"
                  rel="noopener noreferrer"
                >
                  kunal266
                </a>
              </div>
              <div className="flex justify-left">
                <img
                  src="data:image/png;base64,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"
                  alt="facebooklogo"
                  className="rounded-full h-6 w-6 flex items-center justify-center"
                ></img>
                <a
                  href="https://www.facebook.com/kunalmak.2688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 pl-2"
                >
                  kunalmak.2688
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-left  pb-2 pt-3">
                <img
                  src="https://i.pinimg.com/originals/5f/98/5e/5f985eba3b772bb48b5e8f38a3ebc377.png"
                  alt="Instagram logo"
                  className="rounded-lg h-6 w-6 flex items-center justify-center"
                ></img>
                <a
                  href="https://www.instagram.com/daily.coders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 pl-2"
                >
                  @daily.coders
                </a>
              </div>
              <div className="flex justify-left">
                <img
                  src="data:image/png;base64,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"
                  alt="linkedInlogo"
                  className="rounded-lg h-6 w-6 flex items-center justify-center"
                ></img>
                <a
                  href="https://www.linkedin.com/in/kunal-makwana-77300b191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 pl-2"
                >
                  Kunal Makwana
                </a>
              </div>
            </div>
          </div>
    )
}