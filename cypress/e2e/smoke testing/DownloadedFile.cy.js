describe('Downloaded file ', () => {
    it('virat kohli download images', () => {
      cy.downloadFile('https://in.images.search.yahoo.com/search/images;_ylt=Awr1Sdllft9mr7wOCQC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=virat+kohli+images&fr2=piv-web&type=E210IN714G0&fr=mcafee#id=0&iurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3978060.jpg&action=click',"cypress/downloads",'viratkohli image.jpg')
      cy.readFile('cypress/downloads/viratkohli image.jpg').should('exist')
      cy.log('downloaded the file')
    })
   it('virat kohli download images', () => {
    cy.downloadFile('https://in.images.search.yahoo.com/search/images;_ylt=AwrKAD6eh99mfCIJ8EW9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYXNzaXN0;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGZyA21jYWZlZQRmcjIDc2EtZ3Atc2VhcmNoBGdwcmlkAzE1TkxrSkRuUm1XUUN5WElpYmJfakEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMgRwcXN0cgNyY2IgbG9nbwRwcXN0cmwDOARxc3RybAMxMwRxdWVyeQNyY2IlMjBsb2dvJTIwMjAyNAR0X3N0bXADMTcyNTkyNTMwNQR1c2VfY2FzZQM-?p=rcb+logo+2024&fr=mcafee&fr2=sa-gp-search&ei=UTF-8&x=wrt&type=E210IN714G0#id=0&iurl=https%3A%2F%2Fimages.indiafantasy.com%2Fwp-content%2Fuploads%2F20230313150350%2FRCB-logo-1.png&action=click','cypress/downloads','Rcblogo.png')
    cy.readFile('cypress/downloads/Rcblogo.png')
    cy.log('downloaded the rcb logo')
   })
   it('virat kohli download images', () => {
    cy.downloadFile('https://in.images.search.yahoo.com/search/images;_ylt=Awrx.wiXid9mEM4Hgei9HAx.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcyMzAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZAM5SGtFTi5LbVRhZTJUZ2lBeWhtSi5BBG5fcnNsdAMwBG5fc3VnZwMxBG9yaWdpbgNpbi5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMjAEcXVlcnkDcmFtY2hhcmFuJTIwcG5nJTIwaW1hZ2VzBHRfc3RtcAMxNzI1OTI1ODA1?p=ramcharan+png+images&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E210IN714G0#id=0&iurl=https%3A%2F%2Fongpng.com%2Fwp-content%2Fuploads%2F2023%2F02%2F9.Ram_Charan_1447x1885-3.png&action=click','cypress/downloads','Ramcharan.png')
    cy.readFile('cypress/downloads/Rcblogo.png')
    cy.log('downloaded the rcb logo')
   })
  })