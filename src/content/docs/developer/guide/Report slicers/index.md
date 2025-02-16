---
title: About slicers
description: A reference page in my new Starlight docs site.
---

Report slicers allow data slicing of reports. Data slicing is a way for reports to display data from specific data sets like specific dates or date ranges, a value or set of values etc.

## The "Cover" page

By convention all your slicers that apply to more than one page as well as hidden slicers should go to a page named "**Cover**".

Only page-specific **visible slicers** should be put on the specific pages where the users are supposed to interact with them.

## Slicer types

There are several different kind of slicers:

- **List slicers**: Present a list of values from which a single or multiple values can be selected.
- **Date slicers**: Let the user select a specific date or range of dates.
- **???**:

## Slicer titles

**All slicers** that you want to reference from the dynamic data JavaScript definition object **must have titles**. These titles are converted to a single-word object properties during the code matching process as described in the 'Page and slicer names' topic on the [Dynamic slicer definition](/developer/guide/report-slicers/dynamic-slicer-data-definitions/) page.


## Dynamic slicer lists

The list of values presented in list slicers may be fixed or it can change depending on different variables like the current date etc. These values are populated from the underlying tables but can also be populated using a dynamic data formulas as described below.

The values that are required to be pre-selected upon opening of the report will often need to reflect the current date as well as possibly other variables. This is mostly where the **Dynamic slicer pre-selections** described below are needed.

## Dynamic slicer pre-selections

The human designer of the report can pre-select options in data slicers in the Power BI designer's design view. However, if these are based on the current date and possibly other variables it is not feasible to keep updating the report design repeatedly just to update the pre-selections. This practice would most likely result in late updates and thus inconsistent report behavior, apart from being difficult to keep up with.

To resolve this issue SmartDash implements a **dynamic data pre-selection definition** which is done with the use of a **JavaScript object** whose format is described in the [next topic](/developer/guide/report-slicers/dynamic-slicer-data-definitions/).