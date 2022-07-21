import { Pipe, PipeTransform } from '@angular/core';
import { search,lender,registernbfc,borrower,company_loan,complete_search } from './district';

@Pipe({
  name: 'customFilter'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.companyName.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}


// --------------------admin processing application----------------

@Pipe({
  name: 'namesearch'

})

export class FiltervaluePipe implements PipeTransform {

  transform(profileinfo1:search[], namesearch: string):search[]{
    if(!profileinfo1)
     return [];
     if(!namesearch)return profileinfo1;
     namesearch = namesearch.toLowerCase();
     return profileinfo1.filter(it => {
       return it.companyName.toLowerCase().includes(namesearch)
      } );
    }
  }

// -----------------admin manage lenders----------------

@Pipe({
  name: 'leanderSearch'

})

export class FilterSearchPipe implements PipeTransform {

  transform(nbfcinfo:lender[], leanderSearch: string):lender[]{
    if(!nbfcinfo)
     return [];
     if(!leanderSearch)return nbfcinfo;
     leanderSearch = leanderSearch.toLowerCase();
     return nbfcinfo.filter(it => {
       return it.companyName.toLowerCase().includes(leanderSearch)
      } );
    }
  }

  // ---------------admin registernbfc--------------------------


  @Pipe({
  name: 'registerNbfc'

})

export class FilterRegisterPipe implements PipeTransform {

  transform(nbfcinfo:registernbfc[], registerNbfc: string):registernbfc[]{
    if(!nbfcinfo)
     return [];
     if(!registerNbfc)return nbfcinfo;
     registerNbfc = registerNbfc.toLowerCase();
     return nbfcinfo.filter(it => {
       return it.companyName.toLowerCase().includes(registerNbfc)
      } );
    }
  }


  // ----------------manageLoans(dibursedloans)------------------


    @Pipe({
  name: 'borrowerDeatil'

})

export class FilterBorrowerPipe implements PipeTransform {

  transform(disloan:borrower[], borrowerDeatil: string):borrower[]{
    if(!disloan)
     return [];
     if(!borrowerDeatil)return disloan;
     borrowerDeatil = borrowerDeatil.toLowerCase();
     return disloan.filter(it => {
       return it.lender_name.toLowerCase().includes(borrowerDeatil)
      } );
    }
  }


  // --------------admin manageloans(accept loan)-----------------


  @Pipe({

       name: 'searchCompany'
  })

  export class FilterCompanyPipe implements PipeTransform{
    transform(acceptedloans:company_loan[],searchCompany:string):company_loan[]{
      if(!acceptedloans)
        return [];
      if(!searchCompany)return acceptedloans;
      searchCompany = searchCompany.toLowerCase();
      return acceptedloans.filter(it =>{
        return it.companyName.toLowerCase().includes(searchCompany)
      });
    }
  }


  // -------------manageborrower(managecompleteedapp)-------------------------



  @Pipe({

       name: 'searchComplete'
  })

  export class FilterCompletePipe implements PipeTransform{
    transform(profileinfo2:complete_search[],searchComplete:string):complete_search[]{
      if(!profileinfo2)
        return [];
      if(!searchComplete)return profileinfo2;
      searchComplete = searchComplete.toLowerCase();
      return profileinfo2.filter(it =>{
        return it.companyName.toLowerCase().includes(searchComplete)
      });
    }
  }