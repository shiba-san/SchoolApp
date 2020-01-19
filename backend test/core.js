// Sign Up Page Buttons
class SignUpElective
{
    constructor(name, description)
    {
        this.name = name
        this.description = description
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

}

export class SignUpButton
{

    constructor(name, description)
    {
        this.name = name
        this.description = description
        this.elective = []
    }

    addelective(name, description)
    {
        var t_elective = new SignUpElective(name, description)
        this.elective.push(t_elective)
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

    electivecount()
    {
        return this.elective.length
    }

    electivename(i)
    {
        if (i < this.electivecount())
        {
            return ''
        }   

        else{
            return this.elective[i].name
        }
    }

    electivedescription(i)
    {
        if (i < this.electivecount())
        {
            return ''
        }   

        else{
         return this.elective[i].description
        }
    }

}

// Event Page
export class EventList
{

    constructor(name, description, datea)
    {
        this.name = name
        this.description = description
        this.datea = datea
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

    day()
    {
        return this.datea[0]
    }

    month()
    {
        return this.datea[1]
    }

    year()
    {
        return this.datea[2]
    }

    month_w()
    {
        switch(this.datea[1])
        {
            case 1:
                return 'January'
                break;
            case 2:
                return 'February'
                break;
            case 3:
                return 'March'
                break;
            case 4:
                return 'April'
                break;
            case 5:
                return 'May'
                break;
            case 6:
                return 'June'
                break;
            case 7:
                return 'July'
                break;
            case 8:
                return 'August'
                break;
            case 9:
                return 'September'
                break;
            case 10:
                return 'October'
                break;
            case 11:
                return 'November'
                break;
            case 12:
                return 'December'
                break;
            default:
                return 'null'
        }
    }

    dateformat(id)
    {
        switch(id)
        {
            case 1:
                this.date = this.date1()
                break;
            case 2:
                this.date = this.date2()
                break;
            default:
                this.date = this.date1()
        }
    }

    date1()   //01-01-2020
    {
        var ret = (this.datea[0]).toString()
        ret.concat('-',(this.datea[1]).toString(),'-',(this.datea[2]).toString())
        return ret
    }

    date2()   //01 January 2020
    {
        var ret = (this.datea[0]).toString()
        ret.concat(' ',this.month_w(),' ',(this.datea[2]).toString())
        return ret
    }

}