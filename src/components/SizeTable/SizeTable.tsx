import React from "react";

import "./sizeTable.scss";

const SizeTable = () => {
  return (
    <table className="size-table">
      <thead>
        <tr>
          <td>Международный размер</td>
          <td>Российский размер</td>
          <td>Обхват груди</td>
          <td>Обхват талии</td>
          <td>Обхват бедер</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XS</td>
          <td>42</td>
          <td>84</td>
          <td>64</td>
          <td>92</td>
        </tr>
        <tr>
          <td>S</td>
          <td>44</td>
          <td>88</td>
          <td>68</td>
          <td>96</td>
        </tr>
        <tr>
          <td>M</td>
          <td>46</td>
          <td>92</td>
          <td>72</td>
          <td>100</td>
        </tr>
        <tr>
          <td>L</td>
          <td>48</td>
          <td>96</td>
          <td>76</td>
          <td>104</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SizeTable;
