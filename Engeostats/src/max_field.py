import arcpy

arcpy.env.workspace = "omitted_for_anonymity"
arcpy.env.overwriteOutput = True

# input data and fields to find maximum
table = "commuting_duration"
fields = ["COL4", "COL5", "COL6", "COL7", "COL8"]
n = len(fields)

# Add fields to input table to store maximum and field name
maxfield = "max_value"
maxname = "most_common_year"
arcpy.AddField_management(table, maxfield, "LONG")
arcpy.AddField_management(table, maxname, "TEXT")

fields2 = fields[:] # shallow copy
fields2.extend([maxfield, maxname])

with arcpy.da.UpdateCursor(table, fields2) as cursor:
    for row in cursor:
    
        # Look at the first n values        
        check = row[:n]
        maxval = max(check)
    
        # Get the index position of the maxval and use it slice into field list
        # which gives us the field name
        # only update the last two rows
        row[-2:] = maxval, fields[check.index(maxval)]
    
        cursor.updateRow(row)
    
    print ("Done!")

