// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0jLjkh7CmNjiGIHq599fXGb5TZZURn4GLmQkcAp6Sn0oDjaKDSMq3Nge6F3mA72Iv%2BFsPlbOr6tguf7J0qyb%2FX86NbZBt84WrESUtkmuYemwOYm73QX4SCTeE8HGdTr1YzcCW%2BM4PQylyhOvuFVrVi%2F1d5rHFPFYlVJLboKAw%2FTZRz%2BH4EpELaG6whCjKa4Z2f%2BNHvO8B0OCQt9la1BYyxqP5Czril6Koa5DaAUoucLXgw0D9cxKAPI5KNzxbSl5EgzYQNJZU38J5MCnlws7E7%2FlXsXRhtJqSCBYZ8NZWpBS0EIPIqO6O3EiGi4umKTgcY0bpexn3QIZuPc1DoBhPexSsX9R5X84Omf4qlX7blhDPcz%2B92l0g5bI5xIDUj6IQQjedk1g1BXOFb6SojTWlMk%3D000310'
    )
}) 