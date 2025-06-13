import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyFormatDirective),
      multi: true
    }
  ]
})
export class CurrencyFormatDirective implements ControlValueAccessor {
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue && !isNaN(parseFloat(numericValue))) {
      this.onChange(parseFloat(numericValue));
    } else {
      this.onChange(null);
    }
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    this.onTouched();
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    if (numericValue && !isNaN(parseFloat(numericValue))) {
      this.el.nativeElement.value = `$${parseFloat(numericValue).toFixed(2)}`;
    } else {
      this.el.nativeElement.value = '';
    }
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target: HTMLInputElement) {
   
    const value = target.value;
    if (value && value.startsWith('$')) {
      target.value = value.substring(1);
    }
    
  }

  writeValue(value: any): void {
    if (value !== null && value !== undefined && !isNaN(value)) {
      this.el.nativeElement.value = `$${parseFloat(value).toFixed(2)}`;
    } else {
      this.el.nativeElement.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }
}