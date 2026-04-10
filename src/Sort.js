import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // Bubble Sort
  // let swapped = false
  // do {
  //   swapped = false
  //   for (i = 0; i < nums.length; i++) {
  //     snapshot(nums);
  //     if (nums[i] > nums[i+1]) {
  //       const temp = nums[i]
  //       nums[i] = nums[i+1]
  //       nums[i+1] = temp
  //       swapped = true
  //     }
  //   }
  // } while (swapped)

  // Insert Sort
  // for (let i = 1; i < nums.length; i++) {
  //   let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
  //   let j; // the inner counter

  //   // loop from the right to the left
  //   for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
  //     // move numbers to the right until we find where to insert
  //     nums[j + 1] = nums[j];
  //     snapshot(nums)
  //   }

  //   // do the insertion
  //   nums[j + 1] = numberToInsert;
  //   snapshot(nums);
  // }

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
