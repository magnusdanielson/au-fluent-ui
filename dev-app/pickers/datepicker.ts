import { addMonths, addYears } from '@fluentui/date-time-utilities';
import { IDatePickerProps, IDatePickerStrings  } from '@fluentui/react/lib/DatePicker';


export class datepicker
{
  mydate:any;

  private DayPickerStrings: IDatePickerStrings = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
  };

  selected(date: Date | null | undefined)
  {
    this.mydate =date;
  }
    onFormatDate = (date: Date): string => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
      };

    today: Date = new Date(Date.now());
    minDate: Date = addMonths(this.today, -1);
    maxDate: Date = addYears(this.today, 1);
}
