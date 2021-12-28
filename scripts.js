"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const renderLinks = () => {
    const links = data.map((link) =>
        ` <a href="${link.link}">
            <div class="link">
            <img src="${link.icon}" alt="${link.alt}" />
            <p>${link.name}</p>
            </div>
        </a>`
    );
    const linkContainer = document.querySelector('#linkContainer');
    linkContainer.innerHTML = links.join('');
  };
  renderLinks()
  console.log(data);
});
