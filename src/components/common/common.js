

export const findHighest = (arr) => {
    let result = [];
    let max = { score: -1 };
    arr.forEach((item) => {
      if (max.score < item.score) max = item;
      if (max.score === item.score) {
        if (max.numRatings < item.numRatings) max = item;
        if (max.numRatings === item.numRatings) {
          result = arr.filter(
            (r) => r.score === item.score && r.numRatings === item.numRatings
          );
        }
      }
    });
    return result;
  };

  
export function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color === strColor;
  }