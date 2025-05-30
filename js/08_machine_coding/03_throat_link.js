// ptaNahi एक throttle function है जो किसी function को बार-बार चलने से रोकता है
const ptaNahi = (fn, delay) => {
  // myId का इस्तेमाल यह चेक करने के लिए होगा कि delay के बीच function दुबारा ना चले
  let myId = null;

  // यह inner function actual में चलाया जाएगा, जब user call करेगा
  return (...args) => {
    
    // अगर अभी कोई timeout नहीं लगा है (यानि fn को चलाने की अनुमति है)
    if (myId === null) {
      // तुरंत function चला दो और उसे दिए गए arguments पास कर दो
      fn(...args);

      // अब एक बार चलने के बाद, एक timeout सेट कर दो ताकि delay तक fn दुबारा ना चले
      myId = setTimeout(() => {
        // delay खत्म होने के बाद myId को null कर दो ताकि fn फिर से चल सके
        myId = null;
      }, delay);
    }
  };
};

ptaNahi();
ptaNahi();
