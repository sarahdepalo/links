"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const renderLinks = () => {
    const links = data.map((link) =>
        ` <a href="${link.link}" class="animate pop">
            <div class="link">
            <img src="${link.icon}" alt="${link.alt}" class="icon"/>
            <p>${link.name}</p>
            </div>
        </a>`
    );
    const linkContainer = document.querySelector('#linkContainer');
    linkContainer.innerHTML = links.join('');
  };
  renderLinks();
});
