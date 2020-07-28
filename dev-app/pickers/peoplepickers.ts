import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { people, mru } from './PeoplePickerExampleData';
import { IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react/lib/Pickers';
import { assign } from 'office-ui-fabric-react/lib/Utilities';


export class peoplepickers
{

    state:any;

    public selectedItemsNormal: any[] = [];
    public onChangeNormal( items: any[])
    {
        this.selectedItemsNormal = items;
    }

    public selectedItemsCompact: any[] = [];
    public onChangeCompact(items: any[])
    {
        this.selectedItemsCompact = items;
    }

    public selectedItemsList: any[] = [];
    public onChangeList(items: any[])
    {
        this.selectedItemsList =items;
    }

    public selectedItemsLimited: any[] = [];
    public onChangeLimited( items: any[])
    {
        this.selectedItemsLimited = items;
    }
    // OK
    private onItemSelected(item: IPersonaProps): Promise<IPersonaProps> 
    {
        // Put your logic here to return null or modify object

        const processedItem = { ...item };
        processedItem.text = `${item.text} (selected)`;
        return new Promise<IPersonaProps>((resolve, reject) => setTimeout(() => resolve(processedItem), 250));
        ;
    }

    // OK
    suggestionProps: IBasePickerSuggestionsProps = 
    {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts'
    };

    limitedSearchSuggestionProps: IBasePickerSuggestionsProps = 
    assign({
        searchForMoreText: 'Load all Results',
        resultsMaximumNumber: 10,
        searchingText: 'Searching...'
      }, this.suggestionProps);
    

    // OK
    inputProps:any = {
        onBlur: (ev: any) => console.log('onBlur called'),
        onFocus: (ev: any) => console.log('onFocus called'),
        'aria-label': 'People Picker'
    };

    constructor() 
    {    
        this.state = {
            delayResults: false,
            peopleList: people,
            mostRecentlyUsed: mru
        };
        this.selectedItemsCompact = people.splice(0, 3)
    }

    // OK
    private _returnMostRecentlyUsed(currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]>
    {

        let { mostRecentlyUsed } = this.state;
        mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
        return this._filterPromise(mostRecentlyUsed);
    }

    private _returnMostRecentlyUsedWithLimit(currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]>
    {
        console.log("_returnMostRecentlyUsedWithLimit")
        let { mostRecentlyUsed } = this.state;
        mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
        mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
        return this._filterPromise(mostRecentlyUsed);
      };

      // OK
      private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) 
      {
        return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
      }

      // OK
      private _filterPromise(personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> 
      {
        if (this.state.delayResults) {
          return this._convertResultsToPromise(personasToReturn);
        } else {
          return personasToReturn;
        }
      }

      // OK
      private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) 
      {
        if (!personas || !personas.length || personas.length === 0) {
          return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
      }

      // OK
      private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
      }

      // Never called?
      private _onRemoveSuggestion(item: IPersonaProps): void
      {
        console.log("_onRemoveSuggestion");
        console.log(this);

        const { peopleList, mostRecentlyUsed: mruState } = this.state;
        const indexPeopleList: number = peopleList.indexOf(item);
        const indexMostRecentlyUsed: number = mruState.indexOf(item);
    
        if (indexPeopleList >= 0) {
          const newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
          this.state.peopleList = newPeople;
        }
    
        if (indexMostRecentlyUsed >= 0) {
          const newSuggestedPeople: IPersonaProps[] = mruState
            .slice(0, indexMostRecentlyUsed)
            .concat(mruState.slice(indexMostRecentlyUsed + 1));
          this.state.mostRecentlyUsed = newSuggestedPeople;
        }
      };

      // Never called?
      private _validateInput(input: string): ValidationState
      {
          console.log("_validateInput");
        if (input.indexOf('@') !== -1) {
          return ValidationState.valid;
        } else if (input.length > 1) {
          return ValidationState.warning;
        } else {
          return ValidationState.invalid;
        }
      };

      private _onFilterChangedWithLimit( filterText: string,
        currentPersonas: IPersonaProps[],
        limitResults?: number) : IPersonaProps[] | Promise<IPersonaProps[]>
      {
        console.log(limitResults);
        limitResults = 3
          
        if (filterText) 
        {
          let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);
    
          filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
          filteredPersonas = filteredPersonas.splice(0, limitResults);

          return this._filterPromise(filteredPersonas);
        } 
        else 
        {
          return [];
        }
      };

      // OK
      private _onFilterChanged(  filterText: string,
        currentPersonas: IPersonaProps[],
        limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> 
      {
         
        if (filterText) 
        {
          let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);
    
          filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
          filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
          return this._filterPromise(filteredPersonas);
        } 
        else 
        {
          return [];
        }
      };

      // OK
      private _filterPersonasByText(filterText: string): IPersonaProps[] 
      {
        return this.state.peopleList.filter(item => this._doesTextStartWith(item.text as string, filterText));
      }

      // OK
      private _doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
      }
    
      // OK
      private _getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
      }
}
